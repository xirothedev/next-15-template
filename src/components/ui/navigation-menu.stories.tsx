import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Link from "next/link";
import { CircleIcon, CircleCheckIcon, CircleHelpIcon } from "lucide-react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "./navigation-menu";

const meta = {
	title: "UI/NavigationMenu",
	component: NavigationMenu,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Components data
const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description: "A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description: "For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

// ListItem component
function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className="text-sm leading-none font-medium">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}

// Default navigation menu with all features
export const Default: Story = {
	render: () => (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Home</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<Link
										className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
										href="/"
									>
										<div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
										<p className="text-muted-foreground text-sm leading-tight">
											Beautifully designed components built with Tailwind CSS.
										</p>
									</Link>
								</NavigationMenuLink>
							</li>
							<ListItem href="/docs" title="Introduction">
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem href="/docs/installation" title="Installation">
								How to install dependencies and structure your app.
							</ListItem>
							<ListItem href="/docs/primitives/typography" title="Typography">
								Styles for headings, paragraphs, lists...etc
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{components.map((component) => (
								<ListItem key={component.title} title={component.title} href={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/docs">Docs</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>List</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[300px] gap-4">
							<li>
								<NavigationMenuLink asChild>
									<Link href="#">
										<div className="font-medium">Components</div>
										<div className="text-muted-foreground">
											Browse all components in the library.
										</div>
									</Link>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<Link href="#">
										<div className="font-medium">Documentation</div>
										<div className="text-muted-foreground">Learn how to use the library.</div>
									</Link>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<Link href="#">
										<div className="font-medium">Blog</div>
										<div className="text-muted-foreground">Read our latest blog posts.</div>
									</Link>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Simple</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[200px] gap-4">
							<li>
								<NavigationMenuLink asChild>
									<Link href="#">Components</Link>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<Link href="#">Documentation</Link>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<Link href="#">Blocks</Link>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[200px] gap-4">
							<li>
								<NavigationMenuLink asChild>
									<Link href="#" className="flex-row items-center gap-2">
										<CircleHelpIcon />
										Backlog
									</Link>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<Link href="#" className="flex-row items-center gap-2">
										<CircleIcon />
										To Do
									</Link>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<Link href="#" className="flex-row items-center gap-2">
										<CircleCheckIcon />
										Done
									</Link>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};

// Simple navigation menu
export const Simple: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/">Home</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/about">About</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/contact">Contact</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/blog">Blog</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};

// Navigation menu with dropdown
export const WithDropdown: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Products</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<Link
										className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<div className="mt-4 mb-2 text-lg font-medium">Featured Product</div>
										<p className="text-muted-foreground text-sm leading-tight">
											Our most popular product with amazing features.
										</p>
									</Link>
								</NavigationMenuLink>
							</li>
							<ListItem href="/products/web" title="Web Development">
								Build modern web applications with our tools.
							</ListItem>
							<ListItem href="/products/mobile" title="Mobile Apps">
								Create native mobile applications.
							</ListItem>
							<ListItem href="/products/desktop" title="Desktop Apps">
								Powerful desktop applications for professionals.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[300px] gap-3 p-4">
							<ListItem href="/services/consulting" title="Consulting">
								Expert advice for your business needs.
							</ListItem>
							<ListItem href="/services/training" title="Training">
								Learn from industry professionals.
							</ListItem>
							<ListItem href="/services/support" title="Support">
								24/7 customer support and maintenance.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/pricing">Pricing</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};

// Navigation menu with icons
export const WithIcons: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[200px] gap-3 p-4">
							<li>
								<NavigationMenuLink asChild>
									<Link href="#" className="flex items-center gap-2">
										<CircleHelpIcon className="h-4 w-4" />
										Backlog
									</Link>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<Link href="#" className="flex items-center gap-2">
										<CircleIcon className="h-4 w-4" />
										In Progress
									</Link>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<Link href="#" className="flex items-center gap-2">
										<CircleCheckIcon className="h-4 w-4" />
										Completed
									</Link>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[250px] gap-3 p-4">
							<ListItem href="/docs" title="Documentation">
								Comprehensive guides and API references.
							</ListItem>
							<ListItem href="/tutorials" title="Tutorials">
								Step-by-step learning resources.
							</ListItem>
							<ListItem href="/examples" title="Examples">
								Real-world examples and use cases.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/community">Community</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};

// Navigation menu with grid layout
export const WithGridLayout: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{components.map((component) => (
								<ListItem key={component.title} title={component.title} href={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Features</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
							<ListItem href="/features/accessibility" title="Accessibility">
								Built with accessibility in mind from the ground up.
							</ListItem>
							<ListItem href="/features/customization" title="Customization">
								Highly customizable to match your design system.
							</ListItem>
							<ListItem href="/features/performance" title="Performance">
								Optimized for speed and efficiency.
							</ListItem>
							<ListItem href="/features/security" title="Security">
								Enterprise-grade security features.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/docs">Documentation</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};

// Navigation menu with mixed content
export const WithMixedContent: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<Link
										className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<div className="mt-4 mb-2 text-lg font-medium">Enterprise Solution</div>
										<p className="text-muted-foreground text-sm leading-tight">
											Complete solution for enterprise customers with advanced features and
											support.
										</p>
									</Link>
								</NavigationMenuLink>
							</li>
							<ListItem href="/solutions/small-business" title="Small Business">
								Perfect for growing businesses and startups.
							</ListItem>
							<ListItem href="/solutions/enterprise" title="Enterprise">
								Scalable solutions for large organizations.
							</ListItem>
							<ListItem href="/solutions/government" title="Government">
								Secure solutions for government agencies.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Support</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[300px] gap-3 p-4">
							<ListItem href="/support/help-center" title="Help Center">
								Find answers to common questions.
							</ListItem>
							<ListItem href="/support/contact" title="Contact Us">
								Get in touch with our support team.
							</ListItem>
							<ListItem href="/support/status" title="System Status">
								Check the status of our services.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/pricing">Pricing</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};

// Navigation menu without viewport
export const WithoutViewport: Story = {
	render: () => (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Products</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[200px] gap-3 p-4">
							<li>
								<NavigationMenuLink asChild>
									<Link href="/products/web">Web Development</Link>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<Link href="/products/mobile">Mobile Apps</Link>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<Link href="/products/desktop">Desktop Apps</Link>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/about">About</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/contact">Contact</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};
