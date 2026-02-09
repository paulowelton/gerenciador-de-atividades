import { fireEvent, render, screen } from "@testing-library/react"
import InsertTask from "../InsertTask"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

jest.mock("../../../../context/TaskContext")
import { useTasks } from "../../../../context/TaskContext"

describe("InsertTask", () => {
    test("should render correctly", () => {
        useTasks.mockReturnValue({
            addTask: jest.fn()
        });

        render(
            <BrowserRouter>
                <InsertTask/>
            </BrowserRouter>
        );

        expect(screen.getByDisplayValue("Adicionar Tarefa")).toBeInTheDocument();
    })

    test("should call addTask correctly", () => {
        const addTaskMock = jest.fn();

        useTasks.mockReturnValue({
            addTask: addTaskMock
        });

        render(
            <BrowserRouter>
                <InsertTask/>
            </BrowserRouter>
        );

        fireEvent.change(
            screen.getByPlaceholderText("O que precisa ser feito?"),
            { target: {value: "task 1"}}
        )
        
        fireEvent.change(
            screen.getByPlaceholderText("Detalhes da tarefa..."),
            { target: {value: "desc task 1"}}
        )

        fireEvent.click(
            screen.getByDisplayValue("Adicionar Tarefa")
        )

        expect(addTaskMock).toHaveBeenCalledTimes(1)
        expect(addTaskMock).toHaveBeenCalledWith({
            title: "task 1",
            description: "desc task 1",
            image: null
        });
    });
});