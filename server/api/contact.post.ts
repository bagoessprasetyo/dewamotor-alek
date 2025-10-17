export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody(event)
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'serviceType', 'message']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      throw createError({
        statusCode: 400,
        statusMessage: `Missing required fields: ${missingFields.join(', ')}`
      })
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email format'
      })
    }
    
    // Sanitize and structure the data
    const contactData = {
      serviceType: body.serviceType,
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone?.trim() || '',
      vehicleYear: body.vehicleYear || '',
      vehicleMake: body.vehicleMake?.trim() || '',
      vehicleModel: body.vehicleModel?.trim() || '',
      preferredDate: body.preferredDate || '',
      message: body.message.trim(),
      isEmergency: Boolean(body.isEmergency),
      submittedAt: new Date().toISOString()
    }
    
    // Log the contact form submission (in production, you'd save to database)
    console.log('Contact form submission:', contactData)
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification to business
    // 3. Send confirmation email to customer
    // 4. Integrate with CRM system
    // 5. Handle emergency requests with priority
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Prepare response based on service type and emergency status
    let responseMessage = 'Thank you for contacting Dewamotor! We\'ll get back to you within 24 hours.'
    let estimatedResponse = '24 hours'
    
    if (contactData.isEmergency) {
      responseMessage = 'Emergency request received! We\'ll contact you within 1 hour for immediate assistance.'
      estimatedResponse = '1 hour'
    } else if (contactData.serviceType === 'quote') {
      responseMessage = 'Quote request received! We\'ll prepare a detailed estimate and send it to you within 24 hours.'
      estimatedResponse = '24 hours'
    }
    
    // Return success response
    return {
      success: true,
      message: responseMessage,
      data: {
        submissionId: `DM-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        estimatedResponse,
        contactEmail: 'info@dewamotor.com',
        emergencyPhone: '(123) 456-7890'
      }
    }
    
  } catch (error) {
    // Log error for debugging
    console.error('Contact form error:', error)
    
    // Return appropriate error response
    if (error instanceof Error && 'statusCode' in error && error.statusCode) {
      throw error // Re-throw validation errors
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error. Please try again or contact us directly.'
    })
  }
})