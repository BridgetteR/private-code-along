import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, it, describe, vi, expect } from "vitest";
import SearchBar from "./SearchBar";

describe("Search Bar", () => {
    it("Should call onSubmit function passed as prop when submit button is clicked", async () => {
        const submitFunction = vi.fn(() => true);
        const user = userEvent.setup();
        render(
            <SearchBar placeholderText={"search"} onSubmit={submitFunction} />
        );
        const button = screen.getByRole("button");
        const input = screen.getByPlaceholderText("search");
        await user.click(button);
        expect(submitFunction).toHaveBeenCalled();
    });

    it("Should call onSubmit with the correct value from the search bar", async () => {
        const submitFunction = vi.fn((value) => true);
        const user = userEvent.setup();
        render(
            <SearchBar placeholderText={"search"} onSubmit={submitFunction} />
        );
        const button = screen.getByRole("button");
        const input = screen.getByPlaceholderText("search");
        await user.type(input, "Hello");
        await user.click(button);
        expect(submitFunction).toHaveBeenCalled();
        expect(submitFunction.calls[0][0]).toBe("Hello");
    });

    it("Should clear search bar after search button is clicked", async () => {
        const submitFunction = vi.fn((value) => true);
        const user = userEvent.setup();
        render(
            <SearchBar placeholderText={"search"} onSubmit={submitFunction} />
        );
        const button = screen.getByRole("button");
        const input = screen.getByPlaceholderText("search");
        await user.type(input, "Hello");
        expect(input.value).toBe("Hello");
        await user.click(button);
        expect(input.value).toBe("");
    });

    it("Should call onSubmit with changed values after searching multiple times", async () => {
        const submitFunction = vi.fn((value) => value.toUpperCase());
        const user = userEvent.setup();
        render(
            <SearchBar placeholderText={"search"} onSubmit={submitFunction} />
        );
        const button = screen.getByRole("button");
        const input = screen.getByPlaceholderText("search");
        await user.type(input, "Hello");
        await user.click(button);
        await user.type(input, "Goodbye");
        await user.click(button);
        expect(input.value).toBe("");
        expect(submitFunction).toBeCalledTimes(2);
        expect(submitFunction.calls[0][0]).toBe("Hello");
        expect(submitFunction.calls[1][0]).toBe("Goodbye");
    });
});
