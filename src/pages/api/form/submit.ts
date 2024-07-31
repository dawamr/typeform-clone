// With `output: 'hybrid'` configured:
// export const prerender = false;
import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  // const startup_name = formData.get('startup_name')?.toString();
  const postData = Object.fromEntries(formData.entries());
  console.log(postData);

  const { data, error } = await supabase.from('question_answers').insert([postData]).select();

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect('/');
};
