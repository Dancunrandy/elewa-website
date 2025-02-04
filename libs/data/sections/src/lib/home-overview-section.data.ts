import { ContentText } from '@elewa-website/models/schema/ui/texts';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

const __overviewContentText: ContentText = {
  title: 'From here to the world',
  descriptions: [
    'Getting thousands of people up to speed can be hard and expensive. But, it doesn’t have to be.',
    'Elewa is an education partner which develops the kind of training that work at scale. This without losing track of what matters most, people!',
    'Personalised, enjoyable and effective training solutions at scale. Technology enabled; Human powered.',
  ],
};

const __overviewImageConfig: ImageConfig = {
  title: '',
  imageSrc: 'assets/images/farm.png',
  visualisation: ImageVisualisation.Window,
};

export const __overviewImageAndTextData: ImageAndText = {
  content: __overviewContentText,
  image: __overviewImageConfig,
  imagePosition: 'left',
};