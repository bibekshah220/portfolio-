import Image from "next/image";

export default function GlowingAvatar({
  src,
  size = 260,
  className = "",
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className="
          relative rounded-full p-[5px]
          bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600
          shadow-[0_0_20px_#a855f7,0_0_40px_#a855f7,0_0_60px_#a855f7]
          transition-transform duration-300 hover:scale-105
          animate-glow
        "
        style={{ width: size, height: size }}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden bg-black dark:bg-black">
          <Image
            src={src}
            alt="Profile"
            fill
            className="object-cover object-[50%_25%]"
            priority
          />
        </div>
      </div>
    </div>
  );
}

