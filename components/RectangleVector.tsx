// export default function RectangleVector(){
//     const retangle = [

//     ]

// }
// <svg
//   width="871"
//   height="632"
//   viewBox="0 0 871 632"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path d="M22.8289 41.8639H847.829V589.864H22.8289V41.8639Z" fill="#034E42" />
//   <path
//     d="M0 86.3869L820.214 0L870.829 545.341L50.6149 631.728L0 86.3869Z"
//     fill="#199077"
//   />
// </svg>;

type Props = {
  src: string;
  width?: string | number;
  height?: string | number;
};

export default function RectangleVector({
  src,
  width = "600px",
  height = "400px",
}: Props) {
  return (
    <svg
      viewBox="0 0 871 632"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Define a clipPath using your custom path */}
        <clipPath id="rectangleClip">
          <path d="M0 86.3869L820.214 0L870.829 545.341L50.6149 631.728L0 86.3869Z" />
        </clipPath>
      </defs>

      {/* Optional background for the shape */}
      <path
        d="M22.8289 41.8639H847.829V589.864H22.8289V41.8639Z"
        fill="#034E42"
      />

      {/* Image clipped into the shape */}
      <image
        href={src}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#rectangleClip)"
      />
    </svg>
  );
}
