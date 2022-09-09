import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-toggle', IndexField)
  app.component('detail-toggle', DetailField)
  app.component('form-toggle', FormField)
})
