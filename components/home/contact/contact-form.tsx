import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FormInput from "./form-input";
import FormTextarea from "./form-textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormValues, contactSchema } from "@/schemas/contact.schema";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });


  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
  };

  return (
    <Card className="pt-6 pb-4 px-3  md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <FormInput
            id="first_name"
            label="First Name"
            placeholder="Enter your first name"
            register={register}
            error={errors.first_name}
          />
          <FormInput
            id="last_name"
            label="Last Name"
            placeholder="Enter your last name"
            register={register}
            error={errors.last_name}
          />
        </div>

        <FormInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
        />

        <FormTextarea
          id="message"
          label="Message"
          placeholder="How can we help you?"
          register={register}
          error={errors.message}
        />

        <Button
          type="submit"
          className="w-full bg-black uppercase hover:bg-black/90 text-sm md:text-base h-9 md:h-11 px-4 md:px-8"
        >
          Send Message
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm; 