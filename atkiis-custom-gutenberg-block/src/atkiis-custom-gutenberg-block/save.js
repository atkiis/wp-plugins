/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            Block props.
 * @param {Object} props.attributes    Block attributes.
 * @param {string} props.attributes.content The content of the block.
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	// Get the blockProps with all styles, including colors
	const blockProps = useBlockProps.save();
	
	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName="p"
				value={ attributes.content || 'Atkiis Custom Gutenberg Block – hello from the saved content!' }
			/>
		</div>
	);
}
