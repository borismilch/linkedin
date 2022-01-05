
import Layout from '../components/Layout';
import SearchInput from '../components/homepage/SearchInput';

export default function Home() {

  return (
    <Layout title='Google | Search'>

      <div className=' flex-grow w-full flex items-center justify-center '>
        <SearchInput />
      </div>

    </Layout>
  );
}
