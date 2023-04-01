import React from 'react';

const Questions = () => {
    return (
        <div className='p-8'>
            <div className="overflow-x-auto my-12">
                <h2 className='font-bold my-6 text-2xl'>1. Props vs State</h2>
                <table className="table w-full border-separate border text-center text-white">
                   <thead>
                   <tr>
                        <th className='border border-slate-700 font-bold w-2/4'>Props</th>
                        <th className='border border-slate-700 font-bold w-2/4'>State</th>
                    </tr>
                   </thead>
                  <tbody>
                  <tr>
                        <td className='border border-slate-700'>Passed from parent component</td>
                        <td className='border border-slate-700'>Internal to the component</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-700'>Read-only</td>
                        <td className='border border-slate-700'>Mutable</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-700'>Used for configuring components</td>
                        <td className='border border-slate-700'>Used for managing changing information</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-700'>Can be updated by parent component</td>
                        <td className='border border-slate-700'>Can be updated by the component itself</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-700'>Changes trigger re-render of child components</td>
                        <td className='border border-slate-700'>Changes trigger re-render of the component itself and its child components</td>
                    </tr>
                  </tbody>
                </table>
            </div>

            <div>
                <h2 className='font-bold my-6 text-2xl'>2. How does useState works?</h2>
                <ol className='list-decimal'>
                    <li className='mb-4'>When a component is rendered for the first time, the useState hook is called with an initial value for the state variable. For example: <span className='text-orange-500'>"const [count, setCount] = useState(0)"</span>
                    </li>
                    <li className='mb-4'>This creates a state variable called count with an initial value of 0, and a function called setCount that can be used to update the value of count.</li>
                    <li className='mb-4'>
                        The useState hook returns an array with two values - the current value of the state variable (count in this example), and a function that can be used to update the value of the state variable (setCount in this example).
                    </li>
                    <li className='mb-4'>
                        The component can use the current value of the state variable (count) in its rendering logic, and the function returned by useState (setCount) to update the value of the state variable.
                    </li>
                </ol>
            </div>
            <div>
            <h2 className='font-bold my-6 text-2xl'>3. Purpose of useState other than fetching data</h2>
            <ol className='list-decimal'>
                <li className="mb-4">One of the main purposes of useState is to manage state in functional components. Before the introduction of hooks, state could only be managed in class components using the setState method. With the introduction of useState, state management is now possible in functional components as well, which is a huge benefit for developers who prefer to use functional components over class components.</li>
                <li className="mb-4">Another purpose of useState is to handle user interactions and input. For example, in a form component, useState can be used to handle the user's input and store it as state. This allows for easier validation and submission of the form data.</li>
                <li className="mb-4">useState can also be used to control the rendering of a component. For example, if a component should render different content based on a user's interaction, useState can be used to manage the state of the component and trigger a re-render when necessary.</li>
                <li className="mb-4">Overall, useState is a versatile hook that allows for many different use cases beyond just fetching data. It's a powerful tool for managing state and interactions in functional components, and can help make React applications more dynamic and interactive.</li>
            </ol>
            </div>
            <div>
            <h2 className='font-bold my-6 text-2xl'>4. How does react works?</h2>
            <ol className='list-decimal'>
                <li className="mb-4">React is a JavaScript library for building user interfaces. It works by using a component-based architecture, where each component represents a piece of the UI that can be reused and composed together to create complex UIs.</li>
                <li className="mb-4">When a React component is rendered, it generates a virtual representation of the DOM, called the Virtual DOM. The Virtual DOM is a lightweight copy of the actual DOM that React uses to track changes to the UI.</li>
                <li className="mb-4">When a user interacts with the UI, React detects the change and updates the Virtual DOM accordingly. It then compares the updated Virtual DOM to the previous version, identifies the differences, and applies only the necessary changes to the actual DOM. This process is called reconciliation and it's what makes React very efficient and fast.</li>
                <li className="mb-4">React also uses a unidirectional data flow, where data flows down from a parent component to its children through props, and up from the children to the parent through callbacks. This makes it easy to manage the state of the UI and keep it in sync with the application data.</li>
                <li className="mb-4">Overall, React's approach of using a Virtual DOM and unidirectional data flow makes it a powerful and efficient library for building complex and interactive user interfaces.</li>
            </ol>
            </div>

        </div>
    );
};

export default Questions;