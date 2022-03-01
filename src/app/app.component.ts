import { Component, OnInit } from "@angular/core";
import { concat } from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    this.measureTimes();
  }

  public measureTimes() {
    console.time("concatWithLodash");
    concat([123], [456]);
    console.timeEnd("concatWithLodash");

    console.time("concatWithoutLodash");
    const res = [123].concat([456]);
    console.timeEnd("concatWithoutLodash");
  }
}
