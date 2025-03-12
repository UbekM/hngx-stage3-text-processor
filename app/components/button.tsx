/** @format */

export default function Button({ text }: { text: string }) {
  return (
    <div className="px-6 py-[0.6rem] text-center rounded-2xl max-w-60 bg-gradient-to-r from-[#63D7F6] to-[#5376F6] font-extrabold text-lg text-black hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#4067f1] hover:to-[#5ad9fc]">
      {text}
    </div>
  );
}
