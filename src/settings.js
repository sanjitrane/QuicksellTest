
const IMG_BASE_PATH = "/assets"
export const settings = {
  icons:{
    add: `${IMG_BASE_PATH}/add.svg`,
    backlog: `${IMG_BASE_PATH}/backlog.svg`,
    cancelled:`${IMG_BASE_PATH}/cancelled.svg`,
    display: `${IMG_BASE_PATH}/display.svg`,
    done: `${IMG_BASE_PATH}/done.svg`,
    down: `${IMG_BASE_PATH}/down.svg`,
    high_priority: `${IMG_BASE_PATH}/high_priority.svg`,
    in_progress: `${IMG_BASE_PATH}/in_progress.svg`,
    low_priority: `${IMG_BASE_PATH}/low_priority.svg`,
    medium_priority: `${IMG_BASE_PATH}/medium_priority.svg`,
    no_priority: `${IMG_BASE_PATH}/no_priority.svg`,
    dot_menu: `${IMG_BASE_PATH}/three_dot_menu.svg`,
    to_do: `${IMG_BASE_PATH}/to_do.svg`,
    urgent_priority: `${IMG_BASE_PATH}/urgent_priority_colour.svg`,
    urgent_priority_grey: `${IMG_BASE_PATH}/urgent_priority_grey.svg`,
  },
  apis:{
    tickets: `https://api.quicksell.co/v1/internal/frontend-assignment`
  },
  displayPanels:[
    {
      title: 'Grouping',
      options: ['Status', 'User', 'Priority'],
      componentType:'dropdown'
    },
    {
      title: 'Ordering',
      options:['Priority', 'Title'],
      componentType:'dropdown'
    }
  ],
  priority:{
    0 : 'No priority',
    1 : 'Low',
    2 : 'Medium',
    3 : 'High', 
    4 : 'Urgent',
  },
  status:["Backlog",
  "Todo",
  "In progress",
  "Done",
  "Canceled"]
}