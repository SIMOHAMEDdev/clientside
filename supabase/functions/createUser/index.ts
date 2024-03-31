// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hlkfkqwoapkbnjqluhcj.supabase.co'; // Replace with your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsa2ZrcXdvYXBrYm5qcWx1aGNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MjA2ODgsImV4cCI6MjAyNzM5NjY4OH0.6OmohI5cVUTrBohWlYqCMeYpqciQenoz-vVPbRFuk_A'; // Replace with your Supabase Anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async (event, context) => {
  // 1. Extract user data from request body
  const { name, email, password, numbers, letters, words, score, data } = JSON.parse(event.body);

  // 2. Check for existing user with same email
  const { data: existingUser, error: emailError } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (existingUser || emailError) {
    return new Response('User email already exists', { status: 422 }); // Unprocessable Entity
  }

  // 3. Hash the password
  const hashedPass = await bcrypt.hash(password, 10); // Assuming bcrypt is included in your Edge Function environment

  // 4. Insert the new user
  const { data: newUser, error: insertError } = await supabase
    .from('users')
    .insert([{
      name,
      email,
      password: hashedPass,
      numbers, // Assuming these are additional user data fields
      letters,
      words,
      score,
      data,
    }]);

  if (insertError) {
    return new Response('Internal Server Error', { status: 500 });
  }

  // 5. Return success response
  return new Response('User created successfully', { status: 201 }); // Created
};


/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/createUser' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
