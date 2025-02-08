import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UseFormRegister } from "react-hook-form";

interface FormTextareaProps {
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: any;
}

const FormTextarea = ({
  id,
  label,
  placeholder,
  register,
  error,
}: FormTextareaProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-[15px] text-black font-medium">
        {label}
      </Label>
      <Textarea
        id={id}
        placeholder={placeholder}
        className="w-full min-h-[150px] text-[15px] placeholder:text-[#7B889C]"
        {...register(id)}
      />
      {error && <p className="text-red-500 text-[15px]">{error.message}</p>}
    </div>
  );
};

export default FormTextarea; 