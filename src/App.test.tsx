import { render, screen } from "@testing-library/react";

describe("App component", () => {
	it('renders "POKEDEX" heading', () => {
		render(<App />);
		const headingElement = screen.getByText("POKEDEX");
		expect(headingElement).toBeInTheDocument();
		expect(headingElement).toHaveClass("text-3xl font-bold underline");
	});
});
