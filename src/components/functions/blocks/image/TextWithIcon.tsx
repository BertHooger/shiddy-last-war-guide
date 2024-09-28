import Image from 'next/image';
import { TextWithIconProps } from '@/lib/interfaces/media/image';

export default function TextWithIcon({ text, iconSrc, iconAlt = '', iconSize = 20 }: TextWithIconProps) {
    return (
        <span className="flex items-center">
            {text}
            {iconSrc && (
                <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={iconSize}
                    height={iconSize}
                    className="ml-2"
                />
            )}
        </span>
    );
}