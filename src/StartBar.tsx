import { useState } from "react";
import { Button, MenuList, MenuListItem, Separator, Toolbar } from "react95"
import { AppBar } from "react95/dist/AppBar/AppBar"
import windowsLogo from "./assets/windows-logo.svg"

export function StartBar() {
  const [open, setOpen] = useState(false);
  
  return (
    <AppBar style={{height: '50px', bottom: 0, top: 'auto'}}>
      <Toolbar>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={windowsLogo}
              alt='window95 logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <MenuList
              style={{
                position: 'absolute',
                bottom: '20px',
                left: 0
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem>
                <span role='img' aria-label='👨‍💻'>
                  👨‍💻
                </span>
                Profile
              </MenuListItem>
              <MenuListItem>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                My account
              </MenuListItem>
              <Separator />
              <MenuListItem disabled>
                <span role='img' aria-label='🔙'>
                  🔙
                </span>
                Logout
              </MenuListItem>
            </MenuList>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
