import Image from 'next/image'

interface CoverImageProps {
  url: string
  alt: string
}

export const CoverImage: React.FC<CoverImageProps> = ({ url, alt }) => (
  <Image
    priority
    role='img'
    alt={alt}
    src={url}
    quality={40}
    width={300}
    height={300}
    sizes='100vw'
    className='object-cover w-full min-w-full'
  />
)
