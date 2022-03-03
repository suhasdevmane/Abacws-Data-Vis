import "./DataView.scss"
import { useSearchParams } from "react-router-dom";
import { DeviceDetails, FloorSelector, GraphContainer } from "./components";

export interface DataViewProps {}

export function DataView(props: DataViewProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const hidden = searchParams.get("hidePanel") === "true"    
    const className = (hidden) ? "data-container hidden" : "data-container"

    const selectedFloor = (searchParams.has("floor"))? Number(searchParams.get("floor")) : -1;

    return (
        <div className={className}>
            <div className="toggle" onClick={() => {
                    searchParams.set("hidePanel", `${!hidden}`);
                    setSearchParams(searchParams);
                }}>
                <div className="indicator">&rsaquo;</div>
            </div>

            <article className="data-panel">
                <h1 className="title">
                    Data panel
                </h1>

                <FloorSelector
                    current={ selectedFloor }
                    onSelect={(i: number) => {
                        searchParams.set("floor", `${i}`);
                        setSearchParams(searchParams);
                    }}
                />
                <DeviceDetails/>
                <GraphContainer/>
            </article>
        </div>
    )
}