# Access-Control-List

Access to cockpit is managed by a simple access control list (ACL). The ACLs can be defined by module and acl name in the settings above. The following ACLs can be defined on a per-group basis:

* $admin: Give all admin rights to the group. This overwrites whatever is defined under cockpit (Boolean. False if omitted)
* cockpit: Access to the cockpit itself (Array)
  * accounts: Access to the cockpit accounts (Boolean. False if omitted)
  * backend: Access to the admin backend - you need this in order to log in etc (Boolean. False if omitted)
  * finder: Access to the media finder (Boolean. False if omitted)
  * collections: Special ACLs for collections (Array)
  * manage: Manger rights for collections. You need this for certain AJAX requests (Boolean. False if omitted)
* $vars: Overwrite variables used by cockpit (Array)
  * finder.path: Root path from which the finder will show the files. Only used if cockpit.finder is true (String. Default is /)
