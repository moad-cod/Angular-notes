- cmd permettant de créer un composant automatiquement
  → ng generate component NAME_COMP
  → ng g c NAME_COMP
  → ng g c parent_folder/NAME_COMP

- le type de composant standalone
  → standalone : true : composant de type autonome
  → standalone : false : composant de type module
  -Migrating from NgModules to Standalone Components
  . Remove Component Declaration from Module: Remove the component from the declarations array in the corresponding NgModule.
  . Mark the Component as Standalone: Set the standalone property to true in the component's metadata.
  . Import Required Modules in Component: Add any necessary Angular modules directly in the component using the imports array.

- var private utilisé à travers des getters
- var protected utilisé uniquement dans la class et non appelé depuis l'objet
- var public c'est une var publique
- styleUrl n'existe pas dans les anciennes versions faut utiliser
  styleUrls: ['./app.component.css'] au lieu :
    <!-- Exemple : -->
  @Component({
  styleUrl: './app.component.css'
  })
- pour les attributs personnalisés :
  Dynamic aria attributes:
  [attr.aria-valuenow]="currentVal"
  [attr.aria-valuemax]="maxVal"
- states :
  - state with zone.js
    selectedUser = {id:... , avatar :...}
  - getter state imagePath with zone.js
    get imagePath(){

# return './assets/users/'+ this.selectedUser.avatar

      }
    - state with signals
    selectedUser = signal({id:... , avatar :...})
        - getter state imagePath with signals

# imagePath = computed( () => './assets/users/'+ this.selectedUser().avatar)

          #Chaque fois que la popriete selectedUser() ou avatar change, la fonction calculee
          reevaluera et mettra a jour l'imagePath.
          # computed permet de transformer une valeur signal à une autre valeur signal
          # check 178:6m30

- props Input :
  # @Input() le decorateur dans Angular est essentiel pour permettre la communication des composants
  parent-enfant(parent-to-child)
  - prop with zone.js
  # @Input({required : true}) user !: User;
  - prop signals // prop input signals sont mode readonly dans le composant
  # avatar = input.required<string>();
  - l'appel de l'input se fait dans la balise comme attribut [attr] = "avatar"
  - props Output :
    # selectUser = output<string>();
    onSelectUser(){
    this.selectUser.emit(this.user.id);
    }
    # event-binding mechanism
    @Output() selectUser = new EventEmitter<string>();
  - l'appel de l'output se fait dans la balise avec l'attr

# (selectUser) = funcRecupSelectedUser($event)

    // $event est automatiquement ce qu'a été envoyé dans emit(...)

- Signals sont disponible à partir de angular 16
- pour un binding 2 ways dans un form [(ngModel)]
  enteredTitle = "test";
  <input type="text" id="title" name="title" [(ngModel)]="enteredTitle" />

# {{ title() }} in the template is a way to call a method defined in the component class and display its return value in the view

# -- Component Inputs: Repetition --

  <div class="dashboard-item">
    <article>
      <header>
        <img [src]="image().src" [alt]="image().alt" />
        <h2>{{ title() }}</h2>
      </header>
    </article>
  </div>

# -- Property Binding: Repetition --

<app-dashboard-item [image]="{src: 'status.png', alt: 'A signal symbol'}"
title="A sing symbol" >
<app-server-status></app-server-status>
</app-dashboard-item>

# <ng-content></ng-content> element qui rendre tout contenu enveloppé à cet endroit. (place holder for rapp content)

---

# ==> Extending built-in elements with custom components via attribute selectors

# selector: 'button[appButton]',

  <span>
    <ng-content></ng-content>
  </span>
  <span class="icon">
    <ng-content select=".icon"></ng-content>
  </span>

# Advanced content projection

    <button appButton>
      Submit
      <span ngProjectAs="icon">
        ↦
      </span>
    </button>

# Lorsque nous utilisons ng-content, vous pouvez utiliser ngProjectAs avec un sélecteur que vous lui avez déjà attribué dans le bouton partagé comme icon dans cet exemple

---

- @Injectable({ providedIn : "root" })
  - C'est un décorateur utilisé dans des class services (models)
    permettant de partagé le service (l'accès aux données) dans tous le site.
    /_ Scope (racine ou local) : Le paramètre { providedIn: 'root' }
    indique à Angular que ce service doit être fourni au niveau
    de la racine de l'application. Cela signifie que Angular va créer
    une unique instance (singleton) de ce service, qui sera partagée
    à travers toute l'application. _/
    <!-- Pour faire fonction le submit il faut ajouter FormsModule aux imports du comp  -->

# - (ngSubmit) dans le form : évite le rechargement de la page en soumettant le form

# - @NgModule les class Modules permettent de faire un appel des composants (non standalone)

    et les modules enfants utilisés dans le périmétre du composant

- un component (standalone) +v14 : Un composant standalone est déclaré avec la propriété
  standalone: true dans son décorateur @Component.
  Il peut directement importer les dépendances (modules, autres composants, directives, etc.) dans la section imports de son décorateur.
  Il n'a pas besoin d'être enregistré dans un module NgModule.
  Il peut être utilisé seul ou intégré dans une application qui utilise toujours des modules.
  - Avantages :
    Idéal pour les petites applications et les composants isolés
- un component (non standalone) :Un composant non-standalone, aussi appelé composant
  traditionnel, est le type classique de composant en Angular qui doit être déclaré dans un module (NgModule) pour fonctionner. Les composants non-standalone sont regroupés dans des modules, ce qui implique que tu dois gérer les déclarations de tous les composants dans les modules.
  - Avantages :
    Idéal pour des applications plus grandes où la gestion modulaire est essentielle.
    Les modules peuvent regrouper des composants, des directives et des pipes qui partagent des dépendances communes, ce qui permet une gestion centralisée.
- @Component({
  selector: 'app-control',
  encapsulation : ViewEncapsulation.None, // applique le css partout
  host:{ // On peut ajouter n'importe quel attribut à affecter à la balise composant
  class : 'control',
  '(click)' : 'onClick()'
  },
  })
- lifecycle comp : https://angular.dev/guide/components/lifecycle
- Style avec valeur codé : <div [style.height]=(var) ></div>
- Input binding 2ways alternative
  Html :
  <form (ngSubmit)="onSubmit(titleInput)">
  <input type="text" #titleInput />
  Ts :
  onSubmit(titleInput){
  Title = titleInput.value;
  }
- Input binding 2ways alternative to get only value
  Html :
  <form (ngSubmit)="onSubmit(titleInput.value)">
  <input type="text" #titleInput />
  Ts :
  onSubmit(titlevalue){
  Title = titlevalue;
  }
- @ViewChild est un décorateur d'Angular qui permet d'accéder à un élément DOM ou à un composant enfant dans le template du composant.
  @ViewChild('form') form ?: ElementRef<HTMLFormElement>;
- Directives : check AuthDirective to check notes
- Pipes : sert à modifier/transformer la valeur de ce que l'utilisateur voit
  // check sort.pipe & suffix.pipe
  @Pipe({
  name: 'sort',
  standalone: true,
  pure: false // impure pipe permet d'executer le pipe à chaque fois qu'il y a une modif dans le template
  })
  })

- Pour demander une dépendance (service) dans un composant :

  - Méthode 1 : dans le constructeur : constructor(private nameService :NameService){};
  - Méthode 2 : private nameService = inject(NameService);

- pour définir un service :

  - Méthode 1 "best way": dans le service : @Injectable({ providedIn : "root" })
  - Méthode 2 : dans main.ts : (# check 181)
    → bootstrapApplication(AppComponent,  
     providers: [TasksService]
    ).catch((err) => console.error(err));
  - Méthode 3 : service défini dans un composant pour être utilisé dans le comp & comp enfant:
    - Inconvénient : on ne peut pas appelé ce service dans un autre service !
      → @Component({
      ...
      providers : [TasksService]
      })

- pour définir un nom personnalisé à un service (Token)

  - dans main.js :
    → export const TasksServiceToken = new InjectionToken<TasksService>(
    'tasks-service-token'
    );
    bootstrapApplication(AppComponent,  
     providers: [{ provide : TasksServiceToken, useClass: TasksService }]
    ).catch((err) => console.error(err));

- Pour fournir une liste de valeur à tous le projet, on peut le partager en créant un provider personnalisé et
  l'envoyer avec ...[{ provide : MyListValue, useValue: MyCustomType }]...
  # check 187
