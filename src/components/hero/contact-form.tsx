// "use client";

// import formSchema from "@/schemas/contact-form-schema";
// import { useForm } from "react-hook-form";
// import type { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { Textarea } from "../ui/textarea";

// type formSchemaType = z.infer<typeof formSchema>;

// export default function ContactForm() {
//   const form = useForm<formSchemaType>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       message: "",
//     },
//   });

//   function onSubmit(values: formSchemaType) {
//     console.log(values);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="Please enter your email" {...field} />
//               </FormControl>
//               <FormMessage defaultValue={" "} />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="message"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Message</FormLabel>
//               <FormControl>
//                 <Textarea
//                   className="resize-none"
//                   rows={5}
//                   placeholder="Please enter your message"
//                   {...field}
//                 >
//                   {field.value}
//                 </Textarea>
//               </FormControl>
//               <FormMessage defaultValue={" "} />
//             </FormItem>
//           )}
//         />

//         <Button className="ml-auto mr-0" type="submit">
//           Submit
//         </Button>
//       </form>
//     </Form>
//   );
// }
