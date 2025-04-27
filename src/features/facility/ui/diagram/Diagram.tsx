import { useEffect, useRef } from "react";
import * as go from "gojs";
import { useDiagram } from "./useDiagram";

export const Diagram = ()=> {
    const diagramRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (diagramRef.current) {
            const diagram = useDiagram(diagramRef.current);

            // return () => diagram?.dispose();
        }
    }, []);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#151c26]">
            <div
                ref={diagramRef}
                id="myDiagramDiv"
                className="border border-black"
                style={{ width: "1000px", height: "700px" }}
            />
        </div>
    );
}