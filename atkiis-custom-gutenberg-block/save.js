import { useBlockProps } from '@wordpress/block-editor';

const Save = () => {
    return (
        <div { ...useBlockProps() }>
            <p>Hello from the frontend!</p>
        </div>
    );
};
export default Save;
