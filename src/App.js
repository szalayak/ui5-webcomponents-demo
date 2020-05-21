import React, { useRef, useEffect } from "react";
import "./App.css";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/TabSeparator";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents-icons/dist/icons/activities";
import "@ui5/webcomponents-icons/dist/icons/add";
import "@ui5/webcomponents-icons/dist/icons/calendar";
import "@ui5/webcomponents-icons/dist/icons/action-settings";
import "@ui5/webcomponents/dist/Assets";

function App() {
  const tabstrip = useRef();
  const onTabSelect = (event) => console.log(event);

  useEffect(() => {
    const current = tabstrip.current;
    current.addEventListener("tabSelect", onTabSelect);
    return () =>  current.removeEventListener("tabSelect", onTabSelect);
  });

  return (
    <div className="App">
      <header className="App-header">
        <ui5-tabcontainer class="full-width" show-overflow ref={tabstrip}>
          <ui5-tab text="Tab 1">
            <ui5-label>
              Quibusdam, veniam! Architecto debitis iusto ad et, asperiores
              quisquam perferendis reprehenderit ipsa voluptate minus minima,
              perspiciatis cum. Totam harum necessitatibus numquam voluptatum.
            </ui5-label>
          </ui5-tab>
          <ui5-tab icon="activities" text="Tab 2" selected>
            <ui5-label>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              magni facere error dicta beatae optio repudiandae vero, quidem
              voluptatibus perferendis eum maiores rem tempore voluptates
              aperiam eos enim delectus unde.
            </ui5-label>
          </ui5-tab>
          <ui5-tab icon="add" text="Tab 3">
            <ui5-label>
              Dignissimos debitis architecto temporibus doloribus reiciendis
              libero rem nemo, nobis quidem dolor praesentium, beatae voluptatum
              iste eveniet, nam voluptatem obcaecati ducimus dolore.
            </ui5-label>
          </ui5-tab>
          <ui5-tab icon="calendar" text="Tab 4">
            <ui5-label>
              Possimus ipsa eos impedit aut nisi repellendus recusandae,
              temporibus ducimus, necessitatibus tenetur facere, minima vero
              fugit rem reiciendis natus ratione quia numquam?
            </ui5-label>
          </ui5-tab>
          <ui5-tab-separator></ui5-tab-separator>
          <ui5-tab icon="action-settings" text="Tab 5">
            <ui5-label>
              Explicabo laboriosam ab consequuntur, qui dignissimos inventore
              sapiente ullam quaerat ratione libero vero, beatae laudantium!
              Aperiam numquam tempore, laudantium perferendis recusandae autem.
            </ui5-label>
          </ui5-tab>
        </ui5-tabcontainer>
      </header>
    </div>
  );
}

export default App;
