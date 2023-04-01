import './Header.css';

const Header = () => {
    return (
        <div className='p-8'>
        <div className='flex justify-between'>
            <h2 className='text-4xl font-bold'>Knowledge Cafe</h2>
            <img className='w-14 h-14 rounded-3xl' src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80" alt="#" />
        </div>
        <hr className='mt-5 knowledge-cafe-hr' />
        </div>
    );
};

export default Header;