import Image from 'next/image'

interface CoverImageProps {
  src: string
  alt: string
}

export const CoverImage: React.FC<CoverImageProps> = ({ src, alt }) => (
  <Image
    priority
    role='img'
    alt={alt}
    src={src}
    quality={40}
    width={300}
    height={300}
    sizes='100vw'
    className='object-cover w-full min-w-full'
  />
)
