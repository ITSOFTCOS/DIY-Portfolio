type Props = {
  src: string;
  width: string;
  height: string;
};

export default function BlobImage({ src, width, height }: Props) {
  const blob =
    "M15.5 398.7C91 135.5 512.5-145.2 703.4 85.6C850.4 209.5 935.9 594 793.1 763.4C650.2 932.7 547.7 847.6 400.8 723.6C253.9 599.7-59.8 593.5 15.5 398.7Z";

  return (
    <svg viewBox="0 0 871 867" width={width} height={height}>
      <defs>
        <clipPath id="blobClip">
          <path d={blob} />
        </clipPath>
      </defs>

      <image
        href={src}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#blobClip)"
      />
    </svg>
  );
}
