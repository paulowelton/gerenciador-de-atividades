import { fireEvent, render, screen } from "@testing-library/react"
import FilterTask from "../FiltersTask"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

jest.mock("../../../../context/TaskContext")
import { useTasks } from "../../../../context/TaskContext"

describe("FilterTasks", () => {
    test("should call the setFilter when hits the button", () => {
        const setFilterStatusMock = jest.fn();
        useTasks.mockReturnValue({
            setFilterStatus: setFilterStatusMock,
            filteredTasks: [{
                id: "1",
                title: "Task 1",
                description: "Desc 1",
                image: null,
                status: "Pendente",
            }]
        })

        render(
            <BrowserRouter>
                <FilterTask/>
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText("Pendente"))

        expect(setFilterStatusMock).toHaveBeenCalledWith("Pendente")
    })    
})