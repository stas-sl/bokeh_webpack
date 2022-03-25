import { figure, show } from "@bokeh/bokehjs/build/js/lib/api/plotting"
import { linspace } from "@bokeh/bokehjs/build/js/lib/api/linalg"

const n = 100;
const x = linspace(0, 20, n);
const y = x.map(x => Math.sin(x));

const p = figure({ height: 300, output_backend: 'webgl' });

p.line(x, y);

show(p, "#root");
