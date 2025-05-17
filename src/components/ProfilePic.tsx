type Props = {
  url: string;
};

export function ProfilePic({ url }: Props) {
  return (
    <div>
      <img
        src={url}
        loading="lazy"
        alt="profile pic"
        className="rounded-full w-[88px] h-[88px] mb-6"
      />
    </div>
  );
}
