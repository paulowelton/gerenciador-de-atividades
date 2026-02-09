import { render, screen } from "@testing-library/react"
import ListTasks from "../ListTasks"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

jest.mock("../../../../context/TaskContext", () => ({
    useTasks: jest.fn()
}));
import { useTasks } from "../../../../context/TaskContext";

describe("ListTasks", () => {
    test("should render correctly", () => {
        useTasks.mockReturnValue({
            filterStatus: "Todos",
            filteredTasks: [
                {
                    id: "1",
                    title: "Task 1",
                    description: "Desc 1",
                    image: null,
                    status: "Pendente",
                }
            ]
        })
        
        render(
            <BrowserRouter>
                <ListTasks/>
            </BrowserRouter>
        );

        expect(screen.getByText("Task 1")).toBeInTheDocument();
    })
    
    test("should call Link when hits the button visualizar", () => {
        useTasks.mockReturnValue({
            filterStatus: "Todos",
            filteredTasks: [
                {
                    id: "1",
                    title: "Task 1",
                    description: "Desc 1",
                    image: null,
                    status: "Pendente",
                }
            ]
        })
        
        render(
            <BrowserRouter>
                <ListTasks/>
            </BrowserRouter>
        );

        const link = screen.getByRole("link", { name: /visualizar/i });

        expect(link).toHaveAttribute("href", "/task/1")
    })


}) 