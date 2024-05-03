"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFormState } from "react-hook-form"
import { z } from "zod"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@nextui-org/button"


const FormSchema = z.object({
  name : z.string().trim().min(1, "Name is required").min(3, "Name is too short").max(50, "Name is too long"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  message: z.string().trim().min(1, "Message is required").min(10, "Message is too short").max(500, "Message is too long"),
  tnc : z.boolean().default(false).refine(value => value === true, { message: "Please agree to the terms and conditions" }),
})

export function ContactForm() {
  const { toast } = useToast()


  const form = useForm<z.infer<typeof FormSchema>>({ 
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      tnc: false,
    },
  })    

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const { saveContactForm } = await import("@/app/api/action");
      const {message, error}:{
        message?: string;
        error?: string;      
      } = await saveContactForm(data)
      if (message) {
        toast({
          title: "Response submitted",
          description: "Thank you for your response, we will get back to you soon.",
        })
        form.reset()
      }
      console.log(error)
      if (error) {
        toast({
          variant: "destructive",
          title: "Error while submitting",
          description: "There was an error while submitting the form. Please try again later.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error while submitting",
        description: "There was an error while submitting the form. Please try again later.",
      })
    } 
  }
  const { isSubmitting: pending } = useFormState({ control: form.control })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-0 grid gap-3" method="post">
        <FormField
          control={form.control}
          name="name"
          render={() => (
            <FormItem>
              <FormLabel>Name
                <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Please enter your name."
                {...form.register("name")}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={() => (
            <FormItem>
              <FormLabel>Email
                <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="Please enter your email."
                {...form.register("email")} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={() => (
            <FormItem>
              <FormLabel>Message
                <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Please enter your message here."
                className="max-h-48"
                rows={5}
                {...form.register("message")} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tnc"
          render={({field}) => (
            <FormItem >
              <div className="flex items-center">
              <FormControl>
                <Checkbox
                  {...form.register("tnc")}
                  className="me-2"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
               I agree to the terms and conditions
              </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button color="primary" type="submit" radius="sm" isDisabled={pending} isLoading={pending}>
      {
        pending ? (
            "Submitting...."
        ) : (
          "Submit"
        )
      }
    </Button>
      </form>
    </Form>    
  )
}



