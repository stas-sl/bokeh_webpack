import * as Bokeh from '@bokeh/bokehjs'

const plt = Bokeh.Plotting
const np = Bokeh.LinAlg

const n = 100;
const x = np.linspace(0, 20, n);
const y = x.map(x => Math.sin(x));

const p = plt.figure({ height: 300 });

p.line(x, y);

plt.show(p, "#root");
