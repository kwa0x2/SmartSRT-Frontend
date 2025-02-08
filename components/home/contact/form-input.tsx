import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister } from "react-hook-form";

interface FormInputProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: any;
}

const FormInput = ({
  id,
  label,
  placeholder,
  type = "text",
  register,
  error,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-[15px] text-black  font-medium">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full text-black text-[15px] h-12 placeholder:text-[#7B889C]"
        {...register(id)}
      />
      {error && <p className="text-red-500 text-[15px]">{error.message}</p>}
    </div>
  );
};

export default FormInput; 