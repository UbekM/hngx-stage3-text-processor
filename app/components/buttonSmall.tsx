/** @format */

export default function ButtonSmall({ text }: { text: string }) {
  return (
    <button className="text-center rounded-xl max-w-60 bg-gradient-to-r from-[#63D7F6] to-[#5376F6] font-medium text-base text-black hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#4067f1] hover:to-[#5ad9fc] px-4 py-[0.37rem]">
      {text}
    </button>
  );
}
