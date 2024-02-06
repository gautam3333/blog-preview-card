import Image from './components/Image';
import Content from './components/Content';
import Avatar from './components/Avatar';

export default function App() {
  return (
    <main className='sm:max-w-sm my-24 mx-auto max-w-sm'>
      <div className='border border-[#121212] bg-white rounded-xl p-6 border-r-8 border-b-8'>
        <Image />
        <Content />
        <Avatar />
      </div>
    </main>
  );
}
