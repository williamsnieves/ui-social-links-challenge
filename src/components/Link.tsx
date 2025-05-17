type Props = {
  title: string;
};

export function Link({ title }: Props) {
  return (
    <div
      className="bg-[#333333] rounded-lg text-white text-center p-3 cursor-pointer hover:bg-[#C4F82A] hover:text-[#333333] focus:bg-[#C4F82A] focus:text-[#333333] outline-none transition-colors"
      tabIndex={0}
    >
      {title}
    </div>
  );
}
