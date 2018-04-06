import { Sunburst } from "@operational/visualizations"
import { IMarathon } from "../../components/Marathon"

export const marathon = ({ test, afterAll, container }: IMarathon): void => {
  const viz = new Sunburst(container)

  test("No data", () => {
    viz.draw()
  })

  test("Empty dataset", () => {
    viz.data({})
    viz.draw()
  })

  test("Only center node", () => {
    viz.data({ name: "Testing", value: 50 })
    viz.draw()
  })

  test("Close chart", () => {
    viz.close()
  })
}

export const title: string = "No data"