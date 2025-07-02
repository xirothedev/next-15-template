import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AspectRatio } from "./aspect-ratio";
import Image from "next/image";

const meta = {
	title: "UI/AspectRatio",
	component: AspectRatio,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
	args: {
		ratio: 16 / 9,
	},
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default 16:9 aspect ratio
export const Default: Story = {
	render: (args) => (
		<div className="w-[400px]">
			<AspectRatio {...args}>
				<Image
					src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
					height={0}
					width={0}
					alt="Mountain landscape with trees"
					className="object-cover w-full h-full rounded-md"
				/>
			</AspectRatio>
		</div>
	),
};

// Square aspect ratio (1:1)
export const Square: Story = {
	render: (args) => (
		<div className="w-[300px]">
			<AspectRatio {...args} ratio={1}>
				<Image
					src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
					height={0}
					width={0}
					alt="Mountain landscape with trees"
					className="object-cover w-full h-full rounded-md"
				/>
			</AspectRatio>
		</div>
	),
};

// Portrait aspect ratio (3:4)
export const Portrait: Story = {
	render: (args) => (
		<div className="w-[300px]">
			<AspectRatio {...args} ratio={3 / 4}>
				<Image
					src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
					height={0}
					width={0}
					alt="Mountain landscape with trees"
					className="object-cover w-full h-full rounded-md"
				/>
			</AspectRatio>
		</div>
	),
};

// Ultra-wide aspect ratio (21:9)
export const UltraWide: Story = {
	render: (args) => (
		<div className="w-[600px]">
			<AspectRatio {...args} ratio={21 / 9}>
				<Image
					src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
					height={0}
					width={0}
					alt="Mountain landscape with trees"
					className="object-cover w-full h-full rounded-md"
				/>
			</AspectRatio>
		</div>
	),
};

// Video aspect ratio (4:3)
export const Video: Story = {
	render: (args) => (
		<div className="w-[400px]">
			<AspectRatio {...args} ratio={4 / 3}>
				<iframe
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className="w-full h-full rounded-md"
				/>
			</AspectRatio>
		</div>
	),
};

// Custom content with aspect ratio
export const CustomContent: Story = {
	render: (args) => (
		<div className="w-[400px]">
			<AspectRatio {...args}>
				<div className="bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 rounded-md p-6 flex flex-col items-center justify-center">
					<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
						<svg
							className="w-8 h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<title>Image icon</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 className="text-lg font-semibold text-slate-800 mb-2">
						Custom Content
					</h3>
					<p className="text-sm text-slate-600 text-center">
						This demonstrates how AspectRatio can contain any content while
						maintaining the specified ratio.
					</p>
				</div>
			</AspectRatio>
		</div>
	),
};
