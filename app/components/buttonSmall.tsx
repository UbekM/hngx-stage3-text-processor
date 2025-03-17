/** @format */

interface ButtonSmallProps {
  text: string;
  width?: string;
  disabled: boolean;
}

export default function ButtonSmall({
  text,
  width = "lg:max-w-60 lg:w-auto w-full",
  disabled = true
}: ButtonSmallProps) {
  return (
    <button
      className={`rounded-xl ${width} font-medium text-sm ${
        disabled
          ? "cursor-not-allowed bg-slate-600 " 
          : "bg-gradient-to-r  from-[#63D7F6] to-[#5376F6]  text-black hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#4067f1] hover:to-[#5ad9fc]"
      } px-4 py-[0.37rem]`}
      disabled = {disabled}
    >
      {text}
    </button>
  );
}
