import useTheme from "@mui/material/styles/useTheme";

export default function BarChartBaseOption() {
  const theme = useTheme();

  return {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },

    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex]
      },
      offsetX: 10,
      dropShadow: {
        enabled: true
      },
      style: {
        fontSize: '12px'
      },
    },

    yaxis: {
      labels: {
        show: false
      }
    },

    tooltip: {
      x: {
        show: false
      }
    },

    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        type: 'horizontal',
        shadeIntensity: 0,
        opacityFrom: 0.9,
        opacityTo: 0,
        stops: [0, 100]
      }
    },

    colors: [
      theme.palette.primary.main
    ],

    plotOptions: {
      bar: {
        borderRadius: 2,
        horizontal: true,
        dataLabels: {
          position: 'bottom'
        },
      }
    }
  }
}