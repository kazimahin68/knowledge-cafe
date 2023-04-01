import './Header.css';

const Header = () => {
    return (
        <div>
        <div className='flex justify-between'>
            <h2 className='text-4xl font-bold'>Knowledge Cafe</h2>
            <img className='w-14 h-14 rounded-3xl' src="../../../public/author.avif" alt="#" />
        </div>
        <hr className='mt-5 knowledge-cafe-hr' />
        </div>
    );
};

export default Header;