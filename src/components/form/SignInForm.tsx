'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import GoogleSignInButton from '../GoogleSignInButton';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
 const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false, // Prevent automatic redirection
    });
  
    if (signInData?.error) {
      console.log('Error:', signInData.error); // Log any sign-in errors
    } else if (signInData?.ok) {
      console.log('Sign-in Success:', signInData); // Log sign-in success
      router.push('/Mainpage'); // Redirect user to admin page
    } else {
      console.log('Unknown sign-in issue:', signInData); // Log unexpected issues
    }
  };
  

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md'
      >
        <h2 className='text-2xl font-semibold text-center mb-6'>Sign In</h2>
        <div className='space-y-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-gray-700'>Email</FormLabel>
                <FormControl>
                  <Input
                    className='border border-gray-300 rounded-md p-2 w-full'
                    placeholder='mail@example.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-gray-700'>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    className='border border-gray-300 rounded-md p-2 w-full'
                    placeholder='Enter your password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className='w-full mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors'
          type='submit'
        >
          Sign in
        </Button>
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-gray-300 after:ml-4 after:block after:h-px after:flex-grow after:bg-gray-300'>
        or
      </div>
      <GoogleSignInButton className='w-full mb-4' />
      <p className='text-center text-sm text-gray-600'>
        If you don&apos;t have an account, please&nbsp;
        <Link className='text-blue-500 hover:underline' href='/sign-up'>
          Sign up
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
