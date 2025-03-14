import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {
    return (
        <div { ...useBlockProps() }>
            <p>Hello from the editor!</p>
        </div>
    );
};
export default Edit;
