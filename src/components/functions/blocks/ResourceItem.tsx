import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ResourceItemProps } from '@/lib/interfaces/media/resource';

const ResourceItem: React.FC<ResourceItemProps> = ({ name, icons, description, sources }) => {
    return (
        <Card className="h-full">
            <CardContent className="p-4 flex flex-col">
                <div className="flex flex-col items-center mb-4">
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {icons.slice(0, 4).map((icon, index) => (
                            <Image key={index} src={icon} alt={`${name} icon ${index + 1}`} width={40} height={40} className="rounded-md" />
                        ))}
                    </div>
                    {icons.length > 4 && (
                        <div className="flex justify-center gap-2 mt-2">
                            {icons.slice(4).map((icon, index) => (
                                <Image key={index + 4} src={icon} alt={`${name} icon ${index + 5}`} width={40} height={40} className="rounded-md" />
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex-grow flex flex-col justify-between">
                    <p className="text-sm mb-4">{description}</p>
                    <ul className="text-sm space-y-2 list-none">
                        {sources.map((source, index) => (
                            <li key={index} className="flex items-start">
                                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                                <span className="flex-grow">{source.text}</span>
                                {source.icon && (
                                    <Image src={source.icon} alt={`${source.text} icon`} width={20} height={20} className="ml-2 rounded-sm flex-shrink-0" />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};

export default ResourceItem;