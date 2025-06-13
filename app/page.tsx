import { Hero } from '@/components/Hero';
import { SourceCodeGallery } from '@/components/SourceCodeGallery';
import { TopProjectIdeas } from '@/components/TopProjectIdeas';
import { Newsletter } from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <SourceCodeGallery />
      <TopProjectIdeas />
      <Newsletter />
    </>
  );
}