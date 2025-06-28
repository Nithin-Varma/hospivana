import { NextRequest, NextResponse } from 'next/server';

const ADMIN_SECRET_CODE = process.env.ADMIN_SECRET_CODE || 'marketinglead2024';

export async function POST(request: NextRequest) {
  try {
    const { secretCode } = await request.json();
    
    if (secretCode === ADMIN_SECRET_CODE) {
      return NextResponse.json({ 
        success: true, 
        message: 'Access granted' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid secret code' 
      }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Internal server error' 
    }, { status: 500 });
  }
} 