export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email address is required'
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
    
    // Sanitize email
    const email = body.email.toLowerCase().trim()
    
    // In a real application, you would:
    // 1. Check if email already exists in database
    // 2. Save to newsletter subscribers table
    // 3. Send welcome email
    // 4. Integrate with email marketing service (Mailchimp, SendGrid, etc.)
    // 5. Add to mailing list segments
    
    // Simulate checking for existing subscription
    const existingSubscription = false // In real app: check database
    
    if (existingSubscription) {
      return {
        success: true,
        message: 'You are already subscribed to our newsletter!',
        data: {
          email,
          status: 'already_subscribed',
          subscriptionDate: new Date().toISOString()
        }
      }
    }
    
    // Log the newsletter subscription (in production, save to database)
    console.log('Newsletter subscription:', {
      email,
      subscribedAt: new Date().toISOString(),
      source: 'website'
    })
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Return success response
    return {
      success: true,
      message: 'Successfully subscribed to our newsletter! Welcome to the Dewamotor family.',
      data: {
        email,
        status: 'subscribed',
        subscriptionDate: new Date().toISOString(),
        benefits: [
          'Monthly automotive tips and maintenance guides',
          'Exclusive discounts on services',
          'Early access to seasonal promotions',
          'Important recall and safety notifications'
        ],
        preferences: {
          frequency: 'monthly',
          topics: ['maintenance-tips', 'promotions', 'company-news']
        }
      }
    }
    
  } catch (error) {
    // Log error for debugging
    console.error('Newsletter subscription error:', error)
    
    // Return appropriate error response
    if (error instanceof Error && 'statusCode' in error && error.statusCode) {
      throw error // Re-throw validation errors
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error. Please try again later.'
    })
  }
})